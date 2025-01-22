<script setup>

</script>

<template>
    <div class="navbar">
        <div class="logo">&lt;CN /&gt;</div>
        <div class="nav-links">
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
            <div class="divider"></div>

            <a href="#" class="btn">Download CV</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: #fffffff0;
    border-bottom: 1px solid #cbcaca54;

    .logo {
        font-size: 1.875rem;
        line-height: 1.875rem;
        font-weight: 700;
        color: #121827;
        letter-spacing: -.02em;

    }

    .nav-links {
        display: flex;
        align-items: center;

        a {
            margin: 0 15px;
            text-decoration: none;
            color: #4a4a4a;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;
            transition-property: all;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: .15s;

            &:hover {
                color: #121827;
            }
        }

        .divider {
            height: 1.5rem;
            width: .125rem;
            background-color: #F3F4F6;
            margin: 0 15px;
        }


        .btn {
            background-color: #1a1a1a;
            color: #ffffff;
            padding: 8px 18px;
            border-radius: .75rem;
            text-decoration: none;
            font-size: 16px;

            &:hover {
                background-color: #1a1a1ad6;
                color: #fff;
            }
        }
    }
}
</style>