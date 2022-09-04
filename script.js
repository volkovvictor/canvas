'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;
const segmentsX = 9;
const segmentsY = 17;
const segmentsXWidth = width / segmentsX;
const segmentsYHeight = height / segmentsY;

const setHorizontalLines = () => {
   let lineSpace = segmentsYHeight;
   for (let i = 0; i <= segmentsY; i++) {
      if (i === 0) {
         context.beginPath();
         context.moveTo(0, lineSpace);
         context.lineTo(width, lineSpace);
         context.strokeStyle = '#B1C8D6';
         context.stroke();

         lineSpace += segmentsYHeight;
      } else {
         context.beginPath();
         context.moveTo(0, lineSpace);
         context.lineTo(width, lineSpace);
         context.strokeStyle = '#B1C8D6';
         context.stroke();

         context.beginPath();
         context.moveTo(0, lineSpace + 30);
         context.lineTo(width, lineSpace + 30);
         context.strokeStyle = '#B1C8D6';
         context.stroke();

         lineSpace += segmentsYHeight + 15;
      }
   }
};

const rtlLine = () => {
   let lineSpaceX = segmentsXWidth * 1.5;
   let lineSpaceY = segmentsXWidth * 3;
   for(let i = 0; i <= segmentsX; i++) {
      context.beginPath();
      context.moveTo(lineSpaceX, 0);
      context.lineTo(0, lineSpaceY);
      context.strokeStyle = '#B1C8D6';
      context.stroke();

      lineSpaceX += segmentsXWidth * 1.5;
      lineSpaceY += segmentsXWidth * 3;
   }
};

const ltrLine = () => {
   let lineSpaceX = width - 36;
   let lineSpaceY = 60;
   for(let i = 0; i <= segmentsX; i++) {
      context.beginPath();
      context.moveTo(lineSpaceX, 0);
      context.lineTo(width, lineSpaceY);
      context.strokeStyle = '#ECF4F7';
      context.stroke();

      lineSpaceX -= segmentsXWidth * 1.5;
      lineSpaceY += segmentsXWidth * 3;
   }
};

setHorizontalLines();
rtlLine();
ltrLine();

context.beginPath();
context.moveTo(width - 100, 0);
context.lineTo(width - 100, height);
context.strokeStyle = '#D19CB8';
context.stroke();