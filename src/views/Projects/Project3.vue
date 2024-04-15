<template>
    <!-- project section start -->
    <section class="project" id="project">
        <div class="max-width">
            <h2 class="title">Cookiebie</h2>
            <div class="project-content">
                <div class="column left">
                    <img src="frontend/images/project3.jpg" @click="openModal(0)" alt="">
                    <p>Click the image to preview</p>
                </div>
                <div class="column right">
                    <div class="text">February 8, 2024</div>
                    <p>
                        Cookiebies represents a fresh and delightful take on the traditional cookie, infused with creativity and a touch of home-baked warmth. This logo captures the essence of a brand that prioritizes quality and comfort, using soft, rounded typography paired with warm, inviting colors that mimic the irresistible appeal of freshly baked cookies. The design conveys a sense of friendliness and accessibility, inviting customers of all ages to indulge in a sweet treat that feels both innovative and familiar.
                    </p>
                    <br><br>
                    <p>
                        Reflecting the brand’s commitment to uniqueness and satisfaction, the Cookiebies logo is more than just a symbol; it's an invitation to experience joy and nostalgia through every bite. The playful elements within the logo, like the whimsical cookie icon and cheerful accents, promise a delightful adventure into the world of flavors and textures, making every cookie not just a snack, but a memorable part of your day.
                    </p>
                </div>
            </div>
            <!-- Modal for fullscreen image preview -->
            <div v-if="isModalOpen" class="modal">
                <span class="close" @click="closeModal">&times;</span>
                <img :src="images[currentImageIndex]" class="modal-content">
                <button class="prev" @click="changeImage(-1)">&#10094;</button>
                <button class="next" @click="changeImage(1)">&#10095;</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    Name:'Project3',
    data() {
        return {
            isModalOpen: false,
            currentImageIndex: 0,
            images: [
                'frontend/images/project3.jpg',
            ]
        };
    },
    methods: {
        openModal(index) {
            this.currentImageIndex = index;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        changeImage(direction) {
            this.currentImageIndex += direction;
            if (this.currentImageIndex >= this.images.length) {
                this.currentImageIndex = 0;
            } else if (this.currentImageIndex < 0) {
                this.currentImageIndex = this.images.length - 1;
            }
        }
    }
};

</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}

.modal-content {
    max-width: 90%;
    max-height: 80%;
}

.column a{
    display: inline-block;
    background: #2a9df4;
    color: #fff;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 2px solid #2a9df4;
    transition: all 0.3s ease;
}

.close {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

button {
    cursor: pointer;
    background-color: #fff;
    color: #333;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    opacity: 0.7;
    transition: opacity 0.3s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

button:hover {
    opacity: 1;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>
