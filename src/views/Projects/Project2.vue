<template>
    <!-- project section start -->
    <section class="project" id="project">
        <div class="max-width">
            <h2 class="title">Phoenix Rising</h2>
            <div class="project-content">
                <div class="column left">
                    <img src="frontend/images/project2.jpg" @click="openModal(0)" alt="">
                    <p>Click the image to preview</p>
                    <a href="https://www.facebook.com/profile.php?id=61556515341302" target="_blank" class="redirect-button"><i class="fab fa-facebook" style="color: #ffffff; margin-right: 8px;"></i>Visit on Facebook</a>
                </div>
                <div class="column right">
                    <div class="text">March 9, 2023</div>
                    <p>
                        The "Phoenix Rising" logo is a powerful emblem for the school's responder team, designed to capture the essence of unwavering resilience and the promise of renewal. Depicting a majestic phoenix ascending amidst vibrant flames, the logo symbolizes the responders’ ability to rise above challenges and adversity, mirroring the mythical bird's rise from ashes to signify new beginnings and hope.
                    </p>
                    <br><br>
                    <p>
                        This emblem not only represents the courage and dedication of the school's responders in emergencies but also their role as beacons of support and safety within the school community. It underscores their commitment to swiftly and effectively address crises, ensuring the well-being of all students and staff with a spirit of rejuvenation and steadfast resolve.
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
    Name:'Project2',
    data() {
        return {
            isModalOpen: false,
            currentImageIndex: 0,
            images: [
                'frontend/images/project2.jpg',
                'frontend/images/project2-1.jpg',
                'frontend/images/project2-2.jpg',
                'frontend/images/project2-3.jpg'
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
