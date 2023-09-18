import React from 'react';

function Footer() {
    return (
        <div className="bg-gradient-to-b from-black to-neutral-800 h-64">
            <h2 className="pt-20 pb-4 text-xl font-semibold text-white text-center">
                Connect With Me
            </h2>
            <div className="max-w-7xl flex flex-wrap items-center justify-center gap-x-4">
                <a className='' href="https://github.com/nicholasmel">
                    <img src="https://img.icons8.com/ios-glyphs/480/ffffff/github.png" alt="" width="30" />
                </a>
                <a className='' href="https://www.linkedin.com/in/nicholasmel">
                    <img src="https://img.icons8.com/color/480/ffffff/linkedin.png" alt="" width="40" />
                </a>
                <a className='' href="mailto:Nicholas.Mel@asu.edu">
                    <img src="https://img.icons8.com/color/480/ffffff/apple-mail.png" alt="" width="40" />
                </a>
            </div>
        </div >
    );
}

export default Footer;
