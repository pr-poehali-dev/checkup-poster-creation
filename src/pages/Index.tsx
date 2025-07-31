import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white border border-blue-100 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-white px-8 py-6 text-center border-b border-blue-100">
          <img 
            src="https://cdn.poehali.dev/files/0b348a5c-8a5f-48b4-84b4-18b6b7b514ff.jpg"
            alt="Центральная Городская Больница №3 Екатеринбург"
            className="max-w-lg mx-auto h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="px-8 py-8">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Приглашаем на
            </h2>
            <div className="text-5xl font-black text-blue-600 mb-4">
              CHECK-UP!
            </div>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Address Block */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center mb-3">
              <Icon name="MapPin" size={24} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Адрес проведения</h3>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              Поликлиника №2<br />
              ул. Братьев Быковых, 16
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Icon name="Shield" size={24} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Что вас ждет</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-green-50 rounded-xl p-4">
                <Icon name="Stethoscope" size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700 font-medium">Полное обследование</span>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl p-4">
                <Icon name="UserCheck" size={20} className="text-blue-600 mr-3" />
                <span className="text-gray-700 font-medium">Консультация специалистов</span>
              </div>
            </div>
          </div>

          {/* Free Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-6 text-center mb-8">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Gift" size={28} className="text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">АБСОЛЮТНО БЕСПЛАТНО!</h3>
            </div>
            <p className="text-white text-lg">
              Спешите воспользоваться уникальной возможностью заботы о своем здоровье!
            </p>
          </div>

          {/* QR Code Section */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Узнайте подробности</h3>
            
            {/* QR Code */}
            <div className="bg-white rounded-xl p-6 mb-4 inline-block border">
              <img 
                src="https://cdn.poehali.dev/files/9f4b7d2d-8af9-4f17-8e42-ca133cfeb324.png" 
                alt="QR-код для получения подробностей"
                className="w-48 h-48 mx-auto"
              />
            </div>
            
            <div className="flex items-center justify-center mb-2">
              <Icon name="Camera" size={20} className="text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-gray-800">
                Наведите камеру на QR-код
              </span>
            </div>
            <p className="text-gray-600">
              и узнайте подробности о записи на обследование
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-600 px-8 py-4 text-center">
          <div className="flex items-center justify-center text-white">
            <Icon name="Phone" size={18} className="mr-2" />
            <span className="font-medium">Ваше здоровье — наша забота</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;