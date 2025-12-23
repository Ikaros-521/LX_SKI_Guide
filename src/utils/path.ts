// 处理GitHub Pages路径的工具函数
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/LX_SKI_Guide' : '';
}
export function createPath(path: string): string {
  const basePath = getBasePath();
  return basePath + path;
}
