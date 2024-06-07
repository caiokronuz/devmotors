import { getItemBySlug } from '@/utils/actions/get-data';

import { PostProps } from '@/utils/post-types';

import { Container } from '@/components/container';
import { Hero } from '@/components/hero';

import Image from 'next/image';

import styles from './styles.module.scss';
import { Phone } from 'lucide-react';


export default async function Page({ params: { slug } }: {
    params: { slug: string }
}) {

    const { objects }: PostProps = await getItemBySlug(slug);
    console.log(JSON.stringify(objects, null, 2))

    console.log(objects)

    return (
        <>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={24} color="#FFF" />}
            />

            <Container>
                <section className={styles.about}>

                    <article className={styles.innerAbout}>
                        <h1 className={styles.title}>
                            {objects[0].metadata.description.title}
                        </h1>
                        <p>
                            {objects[0].metadata.description.text}
                        </p>

                        {objects[0].metadata.description.button_active && (
                            <a 
                                href={objects[0].metadata.description.button_url as string}
                                target='_blank'
                                className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                    </article>

                    <div className={styles.bannerAbout}>
                       <Image 
                            className={styles.imageAbout}
                            alt={objects[0].title}
                            quality={100}
                            fill
                            priority
                            src={objects[0].metadata.description.banner.url}
                       /> 
                    </div>

                </section>
            </Container>
        </>
    )
}