'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting...' });

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Product added successfully!' });
        setFormData({ name: '', description: '', price: '', category: '', image: '' });
        setTimeout(() => {
           setStatus({ type: '', message: '' });
           router.refresh();
           router.push('/products');
        }, 2000);
      } else {
        const data = await res.json();
        setStatus({ type: 'error', message: data.message || 'Failed to add product' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An error occurred.' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>

          {status.message && (
            <div className={`alert ${status.type === 'success' ? 'alert-success' : status.type === 'error' ? 'alert-error' : 'alert-info'} mb-6`}>
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Organic Bananas"
                className="input input-bordered"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
               <label className="label">
                 <span className="label-text font-bold">Category</span>
               </label>
               <select 
                 name="category" 
                 className="select select-bordered"
                 value={formData.category} 
                 onChange={handleChange}
               >
                 <option value="">Select Category</option>
                 <option value="Fruits">Fruits</option>
                 <option value="Vegetables">Vegetables</option>
                 <option value="Dairy">Dairy</option>
                 <option value="Bakery">Bakery</option>
                 <option value="Other">Other</option>
               </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <label className="input-group">
                <span className="bg-base-200 px-4 flex items-center border border-r-0 border-base-300 rounded-l-lg">$</span>
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  className="input input-bordered w-full"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  step="0.01"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://..."
                className="input input-bordered"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Product description..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? <span className="loading loading-spinner"></span> : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
