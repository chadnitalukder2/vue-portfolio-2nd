<script setup>


</script>

<template>
    <div class="project_details">
        <div class="header">
            <h1> Portfolio Project</h1>
        </div>
        <div class="content">
            <div class="left">
                <div class="image-slider">
                    <img src="../assets/img/portfolioOne.png">
                </div>

            </div>
            <div class="right">
                <div class="description">
                    <h3 class="title"> Description</h3>
                    <p class="name"> <i class="fas fa-user"> </i>Chadni Talukder</p>
                    <p class="name"><i style="font-size:18px" class="fa">&#xf0ac;</i>
                        <a href="http://www.project-site.com">www.project-site.com</a>
                    </p>
                    <p class="name"> <i class="fas fa-calendar-alt"></i>
                        25 December, 2016
                    </p>
                    <p description_describe>
                        Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                    </p>
                </div>
                <div class="technology">
                    <h3 class="title">Technology</h3>
                    <div class="tags">
                        <p> HTML5 </p>
                        <p> CSS3</p>
                        <p>jQuery</p>
                        <p> Ajax</p>
                        <p> PHP5 </p>
                    </div>

                </div>
                <div class="share">
                    <h3 class="title"> Share </h3>
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project_details {
    padding: 50px 100px;
    font-family: 'Archivo Black', sans-serif;

    .header {
        h1 {
            font-size: 30px;
            font-weight: 600;
            color: var(--vt-c-black);
            margin-bottom: 20px;
        }

    }

    .content {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .left {
           flex-basis: 55%;
            margin-right: 20px;

            .image-slider img {
                width: 100%;
                height: auto;
            }
        }

        .right {
            flex-basis: 40%;
        }

    }
}

.description,
.technology,
.share {
    margin-bottom: 20px;
}

.title {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 600;
    color: var(--vt-c-black);
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        margin-top: -1px;
        background-color: var(--vt-c-black);
    }

}

.description {
    .name {
        i {
            color: #000;
            padding-right: 15px;
            font-size: 16px;
        }

        color: #333;
        font-size: 16px;

        a {
            color: #0099CC;
            text-decoration: none;
        }
    }

    .description_describe {
        color: #666;
        font-size: 14px;
        padding-top: 15px;
    }
}

.technology {
    .tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        p {
            display: inline-block;
            background: var(--vt-c-black);
            padding: 5px 10px;
            border-radius: 3px;
            text-decoration: none;
            color: var(--vt-c-white);
        }
    }


}

.share {
    a {
        text-decoration: none;
        color: var(--vt-c-black);
        margin-right: 10px;
        font-size: 20px;
        border: 2px solid var(--vt-c-black);
        padding: 1px 8px;
        border-radius: 5px;
        display: inline-block;
        transition: all 0.3s ease-in-out
    }

    a:hover {
        color: var(--vt-c-white);
        background: var(--vt-c-black);
    }
}

.description p,
.technology p,
.share p {
    margin: 5px 0;
}


@media (max-width: 768px) {
    .content {
        flex-direction: column;
    }

    .left {
        margin-right: 0;
        margin-bottom: 20px;
    }
}
</style>