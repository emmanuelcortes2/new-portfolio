import { CollabButton } from "./Collab-button"
import { Title } from "./Title"

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text-container">
                <Title title="Emmanuel Cortés" />
                <div className="hero-text-container">
                    <p>Hello! I am a software developer! I can help you build a product, feature or website. Take a look at my work.</p>
                    <p>If you like what you see and have a project you need coded, don’t hesitate and contact me</p>
                </div>
                <CollabButton />
            </div>
            <div className="hero-image">
                <img src="assets/image-geometry_1.svg" alt="hero-desktop" className="desktop-image" />
            </div>
        </section>
    )
}