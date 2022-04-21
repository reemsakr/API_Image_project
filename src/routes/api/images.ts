import express from 'express';
import imageExist from '../../utilities/validateInputs';
import { promises as fspromises, readFile} from 'fs';
import resizeImage from '../../utilities/sharp';
import path from 'path';

const images =express.Router();

//images endpoint

images.get('/',async(req:express.Request,res:express.Response)=>{
    try{
        //take data from url
const imageName:string=req.query.imageName as string;
const hi : string=req.query.hight as string;
const wi :string=req.query.width as string;
const hight :number =parseInt(hi);
const width:number=parseInt(wi);
const resizeImageName=`${imageName}_${hight}_${width}`;

let outputPath:string;

if(!imageExist(`${imageName}.jpg`,'full')){
    res.send('image is not found ,please enter the right name');
}
else if(req.query.hight===undefined||req.query.width===undefined)
{
    res.send('sorry there is a missing parameter ');

}
else if(isNaN(hight)||isNaN(width))
{
    res.send('please enter a valid size');
}
else 
{
    if(imageExist(resizeImageName,'resize'))
    {
        outputPath=path.resolve(`assets/images/resize/${resizeImageName}.jpg`);
        
    }
    else{
        outputPath=await  resizeImage(imageName,hight,width);
        outputPath=path.resolve(outputPath);
    
    }
res.sendFile(outputPath);
}
    }
    catch(err){
    console.error(err);
    }
});

export default images;