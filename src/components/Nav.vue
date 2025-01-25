<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
    <div class="main">
        <div class="navbar">
            <div class="logo"> <Router-Link to="/">CHADNI </Router-Link></div>
            <div class="nav-links">
                <a href="#">About Me</a>
                <a href="#">Skills</a>
                <a href="#">Project</a>
                <a href="#">Contact Me</a>
            </div>
            <div class="cv">
                <a href="#" class="btn">Download CV</a>
            </div>
        </div>

        <!-- Mobile Navbar -->
        <div class="mbl_navbar">
            <div class="logo">
                <RouterLink to="/">CHADNI</RouterLink>
            </div>

            <div class="hamburger-lines" @click="toggleMenu">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <div :class="['nav-links', { 'nav-links-open': isMenuOpen }]">
                <a href="#" @click="toggleMenu">About me</a>
                <a href="#" @click="toggleMenu">Skills</a>
                <a href="#" @click="toggleMenu">Works</a>
                <a href="#" @click="toggleMenu">Experience</a>
                <a href="#" @click="toggleMenu">Contact</a>
                <div class="cv">
                    <a href="#" class="btn">Download CV</a>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.navbar {
    font-family: 'Archivo Black', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 100px;
    background: #fffffff0;
    border-bottom: 1px solid #cbcaca54;

    @media (max-width: 1059px) {
        display: none;
    }

    @media (max-width: 1059px) {
        padding: 12px 20px;
    }

    .logo {

        a {
            text-decoration: none;
            font-size: 22px;
            line-height: 1.875rem;
            font-weight: 700;
            color: var(--vt-c-black);
            letter-spacing: -.02em;
        }
    }

    .nav-links {
        display: flex;
        align-items: center;

        a {
            margin: 0 15px;
            text-decoration: none;
            color: var(--vt-c-black);
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 600;
            transition-property: all;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: .15s;

            &:hover {
                color: var(--hover-color);
            }
        }

    }


}

.cv {
    .btn {
        background-color: var(--vt-c-black);
        color: #ffffff;
        padding: 8px 18px;
        border-radius: 8px;
        text-decoration: none;
        font-size: 13px;

        &:hover {
            background: #2c2c2c;
        }
    }
}

//=====================
.mbl_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;
    z-index: 100;
    position: fixed;

    .logo {
        a {
            font-size: 22px;
            line-height: 1.875rem;
            font-weight: 700;
            color: var(--vt-c-black);
            letter-spacing: -.02em;
            text-decoration: none;
        }

    }

    .hamburger-lines {
        display: block;
        height: 20px;
        width: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
            display: block;
            height: 2px;
            width: 100%;
            border-radius: 10px;
            background: #000;
        }

        .line1 {
            transform-origin: 0% 0%;
            transition: transform 0.3s ease-in-out;
        }

        .line2 {
            transition: transform 0.2s ease-in-out;
        }

        .line3 {
            transform-origin: 0% 100%;
            transition: transform 0.3s ease-in-out;
        }
    }

    .nav-links {
        display: none;
        flex-direction: column;
        background-color: var(--vt-c-white);
        position: absolute;
        top: 50px;
        width: 100%;
        left: 0;
        transition: all 0.66s ease-in-out;
        z-index: 99;
        text-align: center;
        padding-bottom: 30px;

        a {
            color: var(--vt-c-black);
            font-size: 15px;
            text-decoration: none;
            transition: all 0.3s;
            padding: 15px 20px;
            font-weight: 600;
        }

        a:hover::after {
            display: block;
            content: '';
            width: 21px;
            height: 2px;
            color: #ffcd38;
            background-color: #ffcd38;
            margin: 0 auto;
        }

        .router-link-active {
            color: #ffcd38;
        }



    }

    .nav-links-open {
        display: flex;
    }
}

@media (min-width: 1059px) {
    .mbl_navbar {
        display: none;
    }
}
</style>