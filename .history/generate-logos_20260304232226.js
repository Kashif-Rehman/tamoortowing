const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const svg = fs.readFileSync(svgPath);

async function generate() {
  // Generate logo192.png
  await sharp(svg)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, 'public', 'logo192.png'));
  console.log('✅ logo192.png generated');

  // Generate logo512.png
  await sharp(svg)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, 'public', 'logo512.png'));
  console.log('✅ logo512.png generated');

  // Generate favicon as 32x32 PNG (browsers accept PNG favicons)
  await sharp(svg)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-32.png'));
  console.log('✅ favicon-32.png generated');

  // Generate 48x48 for ICO
  const ico48 = await sharp(svg)
    .resize(48, 48)
    .png()
    .toBuffer();

  // Generate 16x16 for ICO  
  const ico16 = await sharp(svg)
    .resize(16, 16)
    .png()
    .toBuffer();

  // Create a simple ICO file (single 48x48 PNG embedded)
  // ICO header: 6 bytes + 1 entry (16 bytes) + PNG data
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type: ICO
  icoHeader.writeUInt16LE(1, 4); // Count: 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(48, 0);  // Width
  entry.writeUInt8(48, 1);  // Height
  entry.writeUInt8(0, 2);   // Color palette
  entry.writeUInt8(0, 3);   // Reserved
  entry.writeUInt16LE(1, 4);  // Color planes
  entry.writeUInt16LE(32, 6); // Bits per pixel
  entry.writeUInt32LE(ico48.length, 8);  // Size of image data
  entry.writeUInt32LE(22, 12); // Offset (6 header + 16 entry = 22)

  const ico = Buffer.concat([icoHeader, entry, ico48]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), ico);
  console.log('✅ favicon.ico generated');

  console.log('🎉 All logo files generated successfully!');
}

generate().catch(console.error);
