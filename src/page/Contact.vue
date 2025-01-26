<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify }  = useNotification()
import emailjs from "emailjs-com";

//========================= Initialize EmailJS
emailjs.init("_zgc5H72kDGcA5Gr_"); 

function sendEmail(event) {
  event.preventDefault();

  const form = event.target;
  const params = {
    name: form.querySelector("input[name='name']").value.trim(),
    email: form.querySelector("input[name='email']").value.trim(),
    subject: form.querySelector("input[name='subject']").value.trim(),
    message: form.querySelector("textarea[name='message']").value.trim(),
  };

  emailjs
    .send("service_xfmrvsg", "template_c5skiws", params) // Replace with valid IDs
    .then(() => {
      notify({
        title: "Email sent successfully!",
        type: "success",
      });
      alert('Email sent successfully!');
      form.reset();
    })
    .catch((error) => {
      notify({
        title: "Failed to send email. Please try again.",
        message: error.text || "An unexpected error occurred.",
        type: "error",
      });
      console.error("Error sending email:", error);
    });
}
</script>



<template>
    <div class="contact_section">
        <div class="form-container">
            <form @submit="sendEmail">
                <input type="text" name="name" placeholder="Your name">
                <input type="email" name="email" placeholder="Email">
                <input type="text" name="subject" placeholder="Subject">
                <textarea name="message" placeholder="How can I help?"></textarea>
                <button type="submit">Get In Touch</button>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </form>
        </div>
        <div class="info-container">
            <h1 class="heading">Let's <span>talk</span> for<br>Something special</h1>
            <p class="description">I seek to push the limits of creativity to create high-engaging, user-friendly, and
                memorable interactive
                experiences.</p>
            <div class="contact-info">
                <p class="contact">youremail@gmail.com</p>
                <p class="contact">1234567890</p>
            </div>
        </div>



    </div>
</template>

<style lang="scss" scoped>
.contact_section {
    font-family: 'Archivo Black', sans-serif;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1059px) {
        padding: 85px 20px 50px 20px;
    }

    .form-container,
    .info-container {
        width: 47%;
    }

    .form-container {
        form {
            display: flex;
            flex-direction: column;

            input,
            textarea {
                margin-bottom: 15px;
                padding: 10px;
                border: 2px solid #4443439c;
                border-radius: 5px;
                font-size: 16px;
            }

            textarea {
                height: 100px;
            }

             textarea:focus-visible{
                outline: none;
                border: 2px solid #000 ;
            }
            input:focus-visible{
                outline: none;
                border: 2px solid #000 ;
            }
            button {
                padding: 10px;
                background-color: var(--vt-c-black);
                color: var(--vt-c-white);
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                width: 30%;
                transition: all .3s ease-in-out;

                @media (max-width: 415px) {
                    width: 50%;
                }
            }

            button:hover {
                background: #2c2c2c;
            }

            .social-icons {
                display: flex;
                gap: 20px;
                margin-top: 15px;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    border: 2px solid #000;
                    border-radius: 5px;
                    color: #000;
                    text-decoration: none;
                    font-size: 18px;
                    transition: all .3s ease-in-out;
                }

                a:hover {
                    color: var(--vt-c-white);
                    background: var(--vt-c-black);
                }
            }
        }
    }

    .info-container {
        .heading {
            font-size: 36px;
            margin: 0;
            color: var(--vt-c-black);

            span {
                font-weight: 700;
            }
        }


        .description {
            font-size: 16px;
            margin: 15px 0;
            color: var(--vt-c-small);
        }

        .contact-info {
            .contact {
                font-size: 18px;
                font-weight: 700;
                color: var(--vt-c-black);
            }

        }
    }

    @media (max-width: 829px) {
        flex-direction: column;
        align-items: center;

        .form-container,
        .info-container {
            width: 100%;
            margin-bottom: 20px;
        }
    }


}
</style>