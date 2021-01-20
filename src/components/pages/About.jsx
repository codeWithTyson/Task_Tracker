import React from 'react'

export default function About() {
    return (
        <div className="about">
            <h2>About</h2>
            <p style={{marginTop: '10px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>
            <ul>
                <h4>Our Team</h4>
                <li>jessica - graphics Designer</li>
                <li>Brad - Backend Developer</li>
            </ul>
            <p style={{marginTop: '10px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <strong><a href="!">Email us for business inqueries</a></strong>
        </div>
    )
}
