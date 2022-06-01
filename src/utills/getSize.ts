export function getSize(size: string): string {
  switch (size) {
    case 'small':
      return 'Small size 26cm'
    case 'medium':
      return 'Medium size 30cm'
    default:
      return 'Large size 40cm'
  }
}
