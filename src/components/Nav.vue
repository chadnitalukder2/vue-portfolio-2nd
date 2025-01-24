<script setup>

</script>

<template>
    <div class="navbar">
        <div class="logo">CHADNI</div>
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
</template>

<style lang="scss" scoped>
.navbar {
    font-family:  'Archivo Black', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 100px;
    background: #fffffff0;
    border-bottom: 1px solid #cbcaca54;
    @media (max-width: 1059px) {
        padding: 12px 20px;
    }

    .logo {
        font-size: 22px;
        line-height: 1.875rem;
        font-weight: 700;
        color: var(--vt-c-black);
        letter-spacing: -.02em;

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

    .cv {
        .btn {
            background-color: var(--vt-c-black);
            color: #ffffff;
            padding: 8px 18px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 13px;

            &:hover {
                background-color: var(--hover-color);
                color: #fff;
            }
        }
    }
}
</style>