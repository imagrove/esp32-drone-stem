const { AnalyticsAdminServiceClient } = require('@google-analytics/admin');
const path = require('path');
const fs = require('fs');

const PROJECT_DIR = "/Users/npp/Documents/NI-Group/34_drone-website";
// 引用 32 文件夹下的同一个密钥文件
const KEY_FILE = "/Users/npp/Documents/NI-Group/32_远程遥控系统/imagrove-marketing-automation-c9b795eb55d1.json";
const LAYOUT_FILE = path.join(PROJECT_DIR, "src/layouts/Layout.astro");

async function run() {
    try {
        const client = new AnalyticsAdminServiceClient({
            keyFilename: KEY_FILE,
        });

        console.log("📡 正在获取 Google Analytics 账号...");
        const [accounts] = await client.listAccounts();
        
        if (accounts.length === 0) {
            console.error("❌ 未发现可用的账号，请确保已授权给服务账号。");
            return;
        }

        const account = accounts[0];
        console.log(`✅ 发现账号: ${account.displayName} (${account.name})`);

        console.log("🚀 正在创建资产 (Property)...");
        const [property] = await client.createProperty({
            property: {
                parent: account.name,
                displayName: "34_Drone_Website",
                timeZone: "Asia/Shanghai",
                currencyCode: "CNY",
            },
        });
        console.log(`✅ 资产创建成功: ${property.name}`);

        console.log("🚀 正在创建 Web 数据流 (Data Stream)...");
        const [dataStream] = await client.createDataStream({
            parent: property.name,
            dataStream: {
                type: 'WEB_DATA_STREAM',
                displayName: 'Web Stream',
                webStreamData: {
                    defaultUri: 'https://drone.imagrove.com',
                },
            },
        });

        const measurementId = dataStream.webStreamData.measurementId;
        console.log(`✅ 获取衡量 ID: ${measurementId}`);

        console.log("📝 正在注入 Layout.astro 代码...");
        let content = fs.readFileSync(LAYOUT_FILE, 'utf8');
        
        const gaSnippet = `
    <!-- Google tag (gtag.js) -->
    <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
    <script is:inline>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    </script>
`;

        // 在 Astro 中，如果已经有代码则替换，否则插在 <head> 下
        if (content.includes('googletagmanager.com/gtag/js?id=G-')) {
            content = content.replace(/<!-- Google tag[\s\S]*?<\/script>/, gaSnippet);
        } else {
            content = content.replace('<head>', `<head>${gaSnippet}`);
        }

        fs.writeFileSync(LAYOUT_FILE, content);
        console.log(`✅ GA 代码已成功植入: ${LAYOUT_FILE}`);

    } catch (error) {
        console.error("❌ 自动化运行失败:", error.message);
    }
}

run();
