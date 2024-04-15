<template>
    <section class="project" id="project">
        <div class="max-width">
            <h2 class="title">Web Based Offense Monitoring System - Cordova Public College</h2>
            <div class="project-content">
                <div class="column left">
                    <img src="frontend/images/project4-1.jpg" @click="openModal(0)" alt="">
                    <p>Click the image to preview</p>
                    <a href="https://github.com/svenn7/CPC-OM" target="_blank" class="redirect-button"><i class="fab fa-github" style="color: #ffffff; margin-right: 8px;"></i>Download on GitHub</a>
                </div>

                <div class="column right">
                    <div class="text">December 13, 2023</div>
                    <p>
                        The Offense Monitoring System is a web-based platform designed to streamline the tracking and management of student offenses in Cordova Public College. By leveraging a user-friendly interface and robust database capabilities, this system allows school administrators and faculty to record, monitor, and analyze various student behaviors and infractions efficiently. Its integration of real-time data ensures that all incidents are logged accurately, promoting a transparent and accountable approach to student discipline.
                    </p>
                    <br><br>
                    <p>
                        Equipped with customizable alerts and detailed reporting features, the Offense Monitoring System facilitates proactive interventions and supports consistent enforcement of school policies. The platform not only helps in maintaining discipline but also aids in understanding patterns of behavior, enabling schools to implement targeted educational and behavioral strategies to foster a positive school climate and enhance student outcomes.
                    </p>
                    <br><br>
                    <div class="text">Technology used</div>
                    <p>
                        <li>Laravel 9</li>
                        <li>PHP 8.1</li>
                        <li>Node JS</li>
                    </p>
                    <br><br>
                    <div class="text">Installation guide coming soon</div>
                    <p>
                        ...
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
    name: 'Project4',
    data() {
        return {
            isModalOpen: false,
            currentImageIndex: 0,
            images: [
                'frontend/images/project4-1.jpg',
                'frontend/images/project4-2.jpg',
                'frontend/images/project4-3.jpg',
                'frontend/images/project4-4.jpg',
                'frontend/images/project4-5.jpg',
                'frontend/images/project4-6.jpg',
                'frontend/images/project4-7.jpg',
                'frontend/images/project4-8.jpg',
                'frontend/images/project4-9.jpg',
                'frontend/images/project4-10.jpg',
                'frontend/images/project4-11.jpg',
                'frontend/images/project4-12.jpg',
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

