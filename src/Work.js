import React from 'react';

function Work() {
    return (
        <section id="work" class="work">
            <h1 class="section-title">Work</h1>
            <div class="work work-grid">
                <div class="work-card" data-project="1">
                    <img src="images/app.PNG" alt="" />
                </div>
                <div class="work-card" data-project="2">
                    <img src="images/blocks.PNG" alt="" />
                </div>
                <div class="work-card" data-project="3"><img src="images/page.png" alt="" /></div>
                <div class="work-card" data-project="4"><img src="images/bottles.PNG" alt="" /></div>
                <div class="work-card" data-project="5"><img src="images/identity.PNG" alt="" /></div>
                <div class="work-card" data-project="6">
                    <img src="images/packaging.PNG" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Work;