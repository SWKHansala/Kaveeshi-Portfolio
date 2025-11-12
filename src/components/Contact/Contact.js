/* import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const sendMessage = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        const SERVICE_ID = "YOUR_SERVICE_ID";   // <- replace
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // <- replace
        const USER_ID = "YOUR_USER_ID";         // <- replace

        // If placeholders left, fallback to mailto
        if (
            SERVICE_ID === "YOUR_SERVICE_ID" ||
            TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
            USER_ID === "YOUR_USER_ID"
        ) {
            const mailto = `mailto:youremail@example.com?subject=${encodeURIComponent(
                form.subject || "New message"
            )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
            window.location.href = mailto;
            setSending(false);
            return;
        }

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: form.name,
                from_email: form.email,
                subject: form.subject,
                message: form.message,
            }, USER_ID);

            setStatus("Message sent");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="contact-section" id="contact">
            <div className="contact-inner">
                <form className="contact-form" onSubmit={sendMessage}>
                    <h2>Get In Touch</h2>
                    <p>Have a project in mind or want to say hello? Send a message.</p>

                    <input name="name" value={form.name} onChange={onChange} placeholder="Your Name" required />
                    <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email Address" required />
                    <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" />
                    <textarea name="message" value={form.message} onChange={onChange} rows="6" placeholder="Your Message" required />

                    <div className="contact-actions">
                        <button type="submit" disabled={sending}>
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                        <div className="contact-status">{status}</div>
                    </div>
                </form>

                <aside className="contact-info">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><strong>Email:</strong> hansalawaduge@gmail.com</li>
                        <li><strong>Phone:</strong> +94 77 509 7044</li>
                        <li><strong>Location:</strong> Colombo, Sri Lanka</li>
                    </ul>
                    <div className="contact-socials">
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/SWKHansala"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/kaveeshi-hansala-47707b303/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
} */

// ...existing code...
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const sendMessage = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        // Updated EmailJS details
        const SERVICE_ID = "service_mu5nnvm";
        const TEMPLATE_ID = "template_9c1qa89";
        const USER_ID = "ruz_ofmsSYKIQHz4Q";

        // If placeholders left, fallback to mailto
        if (
            SERVICE_ID === "YOUR_SERVICE_ID" ||
            TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
            USER_ID === "YOUR_USER_ID"
        ) {
            const mailto = `mailto:youremail@example.com?subject=${encodeURIComponent(
                form.subject || "New message"
            )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
            window.location.href = mailto;
            setSending(false);
            return;
        }

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: form.name,
                from_email: form.email,
                subject: form.subject,
                message: form.message,
            }, USER_ID);

            setStatus("Message sent");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="contact-section" id="contact">
            <div className="contact-inner">
                <form className="contact-form" onSubmit={sendMessage}>
                    <h2>Get In Touch</h2>
                    <p>Have a project in mind or want to say hello? Send a message.</p>

                    <input name="name" value={form.name} onChange={onChange} placeholder="Your Name" required />
                    <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email Address" required />
                    <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" />
                    <textarea name="message" value={form.message} onChange={onChange} rows="6" placeholder="Your Message" required />

                    <div className="contact-actions">
                        <button type="submit" disabled={sending}>
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                        <div className="contact-status">{status}</div>
                    </div>
                </form>

                <aside className="contact-info">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><strong>Email:</strong> hansalawaduge@gmail.com</li>
                        <li><strong>Phone:</strong> +94 77 509 7044</li>
                        <li><strong>Location:</strong> Colombo, Sri Lanka</li>
                    </ul>
                    <div className="contact-socials">
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/SWKHansala"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/kaveeshi-hansala-47707b303/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
// ...existing code...