import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_kjnba8d
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rishi Govind",
          from_email: form.email,
          to_email: "rishigovind36@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);

      alert("Your messsage has been sent! ");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);

      console.log(error);

      alert("Something went wrong!!");
    }
  };

  return (
    <section className="c-space my-20">
      <div className=" relative min-h-screen flex items-center justify-center flex-col border border-gray-800 rounded-lg bg-[#0E0E10]">
        {/* <img
          src="/assets/terminal.png"
          alt="terminal background"
          className=" absolute inset-0 min-h-screen"
        /> */}
        <div className="contact-container">
          <h3 className="head-text">Let's Connect</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm a passionate MERN stack developer dedicated to building
            full-stack web applications that are fast, scalable, and visually
            appealing. If you have an idea or project in mind, let’s connect and
            bring it to life with clean code and modern design.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Wick"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johnwick@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Let’s talk about an opportunity that matches your skills!"
              />
            </label>

            <button className=" field-btn " type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
