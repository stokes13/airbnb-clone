import React from 'react'


export default function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb 2021</p>
                <p>Investors</p>
                <p>Careers</p>
            </div>


            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Community</h5>
                <p>Diversity & Belonging</p>
                <p>Against Discrimination</p>
                <p>Accessibility</p>
                <p>Gift cards</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Host</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible Hosting</p>
                <p>Resource Center</p>
                <p>Community Center</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Support</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Center</p>
                <p>Cancellation Options</p>
                <p>Neighborhood Support</p>
                <p>Trust & Safety</p>
            </div>
            <div></div>
        </div>
    )
}
