import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * 自定义 docs loader：
 * - 文件名允许带 `XX-` 数字前缀（用于在文件树中按学习顺序排列）
 * - 通过 generateId 在生成 entry id 时剥离前缀
 * - 这样最终 URL 中不会出现数字前缀，旧的重定向规则继续生效
 */
export const collections = {
  docs: defineCollection({
    loader: glob({
      base: 'src/content/docs',
      pattern: '**/[^_]*.{md,mdx,markdoc}',
      generateId: ({ entry }) =>
        entry
          // 去掉所有路径段开头的 `XX-` 前缀
          .replace(/(^|\/)\d{2,}-/g, '$1')
          // 去掉文件扩展名
          .replace(/\.(md|mdx|markdoc)$/, ''),
    }),
    schema: docsSchema(),
  }),
};
