import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), 'src', 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  const products = JSON.parse(fileContents);
  
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, category, image } = body;
    
    // Basic validation
    if (!name || !price) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newProduct = {
      id: uuidv4(),
      name,
      description: description || '',
      price: parseFloat(price),
      category: category || 'Uncategorized',
      image: image || 'https://placehold.co/400x300?text=No+Image',
      nutrition: 'Information unavailable'
    };

    const jsonDirectory = path.join(process.cwd(), 'src', 'data');
    const filePath = jsonDirectory + '/products.json';
    
    const fileContents = await fs.readFile(filePath, 'utf8');
    const products = JSON.parse(fileContents);
    
    products.push(newProduct);
    
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));
    
    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
