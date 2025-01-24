<script setup>

</script>

<template>
    <div class="home_section">

        <div class="left-home">
            <h1 class="header-title">
                Hello I'am
                <span>
                    Chadni Talukder.<br />
                    Frontend
                </span>
                <span>
                    Developer
                </span>
                <br />
                Based In
                <span>
                    Bangladesh.
                </span>
            </h1>
            <p class="description">
                I'm Chadni Talukder Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type
                and scrambled it to specimen book.
            </p>

            <div class="about-link">
                <a href="#">
                    <i class="fab fa-facebook-f">
                    </i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter">
                    </i>
                </a>
                <a href="#">
                    <i class="fab fa-github">
                    </i>
                </a>
                <a href="#">
                    <i class="fab fa-discord">
                    </i>
                </a>
            </div>

        </div>
        <div class="home-img">
            <img src="../assets/img/home-2.png" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
.home_section {
    font-family: 'Archivo Black', sans-serif;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 60px;
    gap: 50px;

    .left-home {
        .header-title {
            font-size: 42px;
            margin: 0;
            color: var(--vt-c-black);
            padding-bottom: 16px;

            span {
                font-weight: 700;
            }
        }

        .description {
            font-size: 16px;
            color: var(--vt-c-small);
            line-height: 1.5;
            padding-bottom: 25px;

        }

        .about-link {
            a {
                text-decoration: none;
                color: var(--vt-c-black);
                margin-right: 10px;
                font-size: 20px;
                border: 2px solid var(--vt-c-black);
                padding: 4px 10px;
                border-radius: 5px;
                display: inline-block;
                transition: all .3s ease-in-out;
            }

            a:hover {
                color: var(--vt-c-white);
                background: var(--vt-c-black);
            }
        }


    }

    .home-img {
        text-align: center;
        img {
            max-width: 100%;
            height: auto;
        }
    }
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    .home_section {
        h1 {
            font-size: 2em;
        }

        p {
            font-size: 0.9em;
        }

        .social-icons {
            a {
                font-size: 1.2em;
                padding: 8px;
            }
        }
    }
}
</style>