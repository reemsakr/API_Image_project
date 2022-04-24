import path from 'path';
import sharp from 'sharp';

async function resizeImage(imageName: string, hight: number, width: number) {
  const inputPath: string = path.resolve(`assets/images/full/${imageName}.jpg`);
  const outputPath: string = path.resolve(
    `assets/images/resize/${imageName}_${hight}_${width}.jpg`
  );
  await sharp(inputPath)
    .resize(width, hight)
    .toFile(outputPath)
    .then((): string => {
      return `assets/images/resize/${imageName}_${hight}_${width}.jpg`;
    })
    .catch((err: any) => {
      console.error(err);
    });
  return `assets/images/resize/${imageName}_${hight}_${width}.jpg`;
}

export default resizeImage;
