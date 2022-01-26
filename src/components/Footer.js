import React from 'react';

function Footer() {
    return (
        <div className="bg-slate-900">
            <div className="max-w-7xl mx-10 py-12 px-4 sm:px-6 lg:py-16 lg:px-20 flex items-center justify-center">
                <a className='pr-6' href="https://github.com/nicholasmel">
                    <img src="https://img.icons8.com/ios-glyphs/480/ffffff/github.png" alt="" width="40" />
                </a>
                <a className='pr-6' href="https://www.linkedin.com/in/nicholasmel">
                    <img src="https://img.icons8.com/color/480/ffffff/linkedin.png" alt="" width="50" />
                </a>
                <a className='pr-6' href="mailto:Nicholas.Mel@asu.edu">
                    <img src="https://img.icons8.com/color/480/ffffff/apple-mail.png" alt="" width="50" />
                </a>
            </div>
        </div >
    );
}

export default Footer;
