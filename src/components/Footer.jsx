import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm md:text-base">
                    © 2024 Car Rental System. All Rights Reserved.
                </p>
                <p className="mt-2">
                    Follow us on: 
                    <a 
                        href="#" 
                        className="text-blue-400 hover:text-blue-500 mx-2"
                        aria-label="Facebook"
                    >
                        Facebook
                    </a>
                    |
                    <a 
                        href="#" 
                        className="text-pink-400 hover:text-pink-500 mx-2"
                        aria-label="Instagram"
                    >
                        Instagram
                    </a>
                    |
                    <a 
                        href="#" 
                        className="text-blue-300 hover:text-blue-400 mx-2"
                        aria-label="Twitter"
                    >
                        Twitter
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
