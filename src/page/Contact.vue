<script setup>

</script>

<template>
    <div class="contact_section">
        <div class="form-container">
            <form>
                <input type="text" placeholder="Your name">
                <input type="email" placeholder="Email">
                <input type="text" placeholder="Your website (if exists)">
                <textarea placeholder="How can I help?"></textarea>
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
            <h1>Let's <span>talk</span> for<br>Something special</h1>
            <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive
                experiences.</p>
            <div class="contact-info">
                <p>youremail@gmail.com</p>
                <p>1234567890</p>
            </div>
        </div>



    </div>
</template>

<style lang="scss" scoped>
.contact_section {
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .form-container,
    .info-container {
        width: 45%;
    }

    .form-container {
        form {
            display: flex;
            flex-direction: column;

            input,
            textarea {
                margin-bottom: 15px;
                padding: 10px;
                border: 2px solid var(--vt-c-black);
                border-radius: 5px;
                font-size: 16px;
            }

            textarea {
                height: 100px;
            }

            button {
                padding: 10px;
                background-color: var(--vt-c-black);
                color: var(--vt-c-white);
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
            }

            .social-icons {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #000;
                    border-radius: 5px;
                    color: #000;
                    text-decoration: none;
                    font-size: 18px;
                }
            }
        }
    }

    .info-container {
        h1 {
            font-size: 36px;
            margin: 0;

            span {
                font-weight: 700;
            }
        }

        p {
            font-size: 16px;
            margin: 15px 0;
        }

        .contact-info {
            font-size: 18px;
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
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