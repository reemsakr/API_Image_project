import express from 'express';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const imageExist = (imageName: string, dir: string): boolean => {
  try {
    //make resize dir if does not exist
    if (!existsSync(path.resolve(`assets/images/${dir}`))) {
      mkdirSync(path.resolve(`assets/images/${dir}`));
    }

    if (existsSync(path.resolve(`assets/images/${dir}/${imageName}`))) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('err');
  }
  return false;
};

export default imageExist;
