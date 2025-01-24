<script setup>

</script>
<template>
    <div class="container">
   <div class="header">
    Portfolio Project
   </div>
   <div class="content">
    <div class="left">
     <div class="image-slider">
      <img alt="Artistic illustration of an elephant" height="400" src="https://storage.googleapis.com/a1aa/image/oLYJuz1zrmJBCp7NHLGoopPlA6PREGeH0EecRbr3H3LgJaIUA.jpg" width="800"/>
     </div>
     <div class="video">
      <iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/123456789">
      </iframe>
     </div>
    </div>
    <div class="right">
     <div class="description">
      <h3>
       Description
      </h3>
      <p>
       <i class="fas fa-user">
       </i>
       Alex Smith
      </p>
      <p>
       <i class="fas fa-link">
       </i>
       <a href="http://www.project-site.com">
        www.project-site.com
       </a>
      </p>
      <p>
       <i class="fas fa-calendar-alt">
       </i>
       25 December, 2016
      </p>
      <p>
       Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
     </div>
     <div class="technology">
      <h3>
       Technology
      </h3>
      <span>
       HTML5
      </span>
      <span>
       CSS3
      </span>
      <span>
       jQuery
      </span>
      <span>
       Ajax
      </span>
      <span>
       PHP5
      </span>
     </div>
     <div class="share">
      <h3>
       Share
      </h3>
      <a href="#">
       <i class="fab fa-facebook-f">
       </i>
      </a>
      <a href="#">
       <i class="fab fa-twitter">
       </i>
      </a>
      <a href="#">
       <i class="fab fa-google-plus-g">
       </i>
      </a>
     </div>
    </div>
   </div>
  </div>
</template>

<style lang="scss" scoped>
        .header {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .content {
            display: flex;
            flex-wrap: wrap;
        }
        .left {
            flex: 2;
            margin-right: 20px;
        }
        .right {
            flex: 1;
        }
        .image-slider img {
            width: 100%;
            height: auto;
        }
        .description, .technology, .share {
            margin-bottom: 20px;
        }
        .description h3, .technology h3, .share h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .description p, .technology p, .share p {
            margin: 5px 0;
        }
        .technology span, .share a {
            display: inline-block;
            background: #e0e0e0;
            padding: 5px 10px;
            margin: 5px;
            border-radius: 3px;
            text-decoration: none;
            color: #333;
        }
        .share a {
            background: none;
            color: #333;
        }
        .share a:hover {
            color: #000;
        }
        .video {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            max-width: 100%;
            background: #000;
        }
        .video iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
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