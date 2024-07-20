const Location = () => {
    return (
      <div className="border-b border-neutral-900 pt-10 pb-4">

        <div className="flex justify-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <iframe 
              className="rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.20573097582!2d80.94251274999999!3d26.848692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1721199860509!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: 2 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default Location;
  