import Header from '../components/layout/Header';
import ProductCard from '../components/product/ProductCard';
import { Truck, Shield, Headphones } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = [
    {
      id: '1',
      name: 'پیراهن دخترانه طرح گل با آستین کوتاه',
      price: 129000,
      originalPrice: 159000,
      image: 'https://via.placeholder.com/300x400',
      category: 'دخترانه'
    },
    {
      id: '2', 
      name: 'شلوار پسرانه جین الاستیک',
      price: 185000,
      image: 'https://via.placeholder.com/300x400',
      category: 'پسرانه'
    },
    {
      id: '3',
      name: 'لباس نوزادی ست کامل',
      price: 98000,
      image: 'https://via.placeholder.com/300x400', 
      category: 'نوزاد'
    },
    {
      id: '4',
      name: 'کفش دخترانه توری دار',
      price: 220000,
      originalPrice: 280000,
      image: 'https://via.placeholder.com/300x400',
      category: 'دخترانه'
    }
  ];

  const categories = [
    { name: 'دخترانه', image: 'https://via.placeholder.com/300x300', count: 124 },
    { name: 'پسرانه', image: 'https://via.placeholder.com/300x300', count: 98 },
    { name: 'نوزاد', image: 'https://via.placeholder.com/300x300', count: 76 },
    { name: 'اکسسوری', image: 'https://via.placeholder.com/300x300', count: 45 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              دنیای شیک برای کودکان شما
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              با ZiiZii Kids بهترین و شیک‌ترین لباس‌ها را برای فرزندانتان تجربه کنید
            </p>
            <button className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors text-lg">
              شروع خرید
            </button>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              دسته‌بندی محصولات
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-square relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.count} محصول</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-800">محصولات منتخب</h2>
              <button className="text-primary-500 hover:text-primary-600 font-medium">
                مشاهده همه →
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">ارسال رایگان</h3>
                <p className="text-gray-600">برای خریدهای بالای ۲۰۰ هزار تومان</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">ضمانت بازگشت</h3>
                <p className="text-gray-600">بازگشت ۷ روزه محصول</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">پشتیبانی ۲۴/۷</h3>
                <p className="text-gray-600">پاسخگویی سریع به سوالات شما</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ZiiZii Kids</h3>
              <p className="text-gray-300">
                فروشگاه تخصصی لباس کودکان با بهترین کیفیت و طراحی‌های شیک
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">دسته‌بندی‌ها</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">دخترانه</a></li>
                <li><a href="#" className="hover:text-white">پسرانه</a></li>
                <li><a href="#" className="hover:text-white">نوزاد</a></li>
                <li><a href="#" className="hover:text-white">اکسسوری</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">خدمات مشتریان</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">پیگیری سفارش</a></li>
                <li><a href="#" className="hover:text-white">سوالات متداول</a></li>
                <li><a href="#" className="hover:text-white">قوانین و مقررات</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تماس با ما</h4>
              <p className="text-gray-300">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-gray-300">ایمیل: info@ziizii-kids.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}