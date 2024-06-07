import { Submenu } from "@/components/home/submenu";
import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";
import {Phone} from 'lucide-react';

import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home-types";
import { MenuProps } from "@/utils/menu-types";

export default async function Home() {

  const {object}: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu}/>}
      
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF"/>}
      />

      <Container>
        <Services object={object} />
        <Footer object={object}/>
      </Container>
    </main>
  );
}
