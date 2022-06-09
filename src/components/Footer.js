export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>
                    Please come and visit us at the beautiful Hills Golf Club just outside of Arrowtown. Consult the map embedded to the right for more information.<br />
                    <br />
                    We look forward to seeing you soon.<br />
                    <br />
                    PH: 123-456789<br />
                    EM: thehills@golfersgully.com<br />
                </p>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23332.72097051665!2d168.83087627676278!3d-44.970437666255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d522717be3a5a3%3A0xdad81153a5a51e24!2sThe%20Hills%20Golf%20Club!5e0!3m2!1sen!2snz!4v1654815158415!5m2!1sen!2snz"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </footer>
    );
};