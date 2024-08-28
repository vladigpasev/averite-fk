"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BlockProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  delay?: number;
  isLeftAligned?: boolean;
}

interface SectionContent extends BlockProps {}

const getLayoutClass = (isLeftAligned: boolean) =>
  isLeftAligned ? "flex-row" : "flex-row-reverse";

const Block: React.FC<BlockProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  delay = 0,
  isLeftAligned = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={`bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4 ${getLayoutClass(isLeftAligned)}`}
      initial={{ opacity: 0, x: isLeftAligned ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <img src={imgSrc} alt={imgAlt} className="w-24 h-24" />
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

Block.defaultProps = {
  delay: 0,
  isLeftAligned: true,
};

const renderBlocks = (blocks: SectionContent[]) => {
  return blocks.map((content, index) => <Block key={content.title} {...content} />);
};

const AboutUsSection: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionContent: SectionContent[] = [
    {
      imgSrc: "/illustrations/community.svg",
      imgAlt: "Community",
      title: "Нашата видеоигра",
      description:
        "Ние обединяваме традиционното футболно изживяване с модерните технологии, създавайки свят, в който феновете могат не само да гледат мачове, но и да участват в тях чрез нашата видеоигра и виртуална реалност. Това предоставя напълно нов начин за ангажиране и взаимодействие с отбора и неговите играчи.",
      delay: 0,
      isLeftAligned: true,
    },
    {
      imgSrc: "/illustrations/athlete.svg",
      imgAlt: "Athlete",
      title: "Нашите футболисти",
      description:
        "Нашите футболисти са не само професионалисти от световен ранг, но и част от виртуалната ни платформа. Това им позволява да взаимодействат директно с феновете по нов и уникален начин, като създават по-тясна връзка и разширяват футболните граници отвъд стадиона.",
      delay: 0.2,
      isLeftAligned: true,
    },
    {
      imgSrc: "/illustrations/brand_identity.svg",
      imgAlt: "Branding",
      title: "Възможности за спонсори",
      description:
        "Желаете да промотирате вашия продукт пред масивна и разнообразна аудитория? Станете наш спонсор и получете достъп до многобройни рекламни възможности както в реалния, така и в виртуалния свят. Разширете влиянието на вашия бранд сред нови и различни аудитории.",
      delay: 0.4,
      isLeftAligned: true,
    },
    {
      imgSrc: "/illustrations/community.svg",
      imgAlt: "Community",
      title: "Нашият стадион",
      description:
        "Нашият стадион, разположен в красивия град Девин, е истинска емблема на модерната спортна архитектура. Новопостроен и изцяло обновен, той разполага с всички удобства за феновете и играчите, като предлага модерна инфраструктура, която осигурява незабравимо изживяване на всеки мач. От фантастичните трибуни до ексклузивните ВИП ложи, ние сме се постарали да създадем комфортна и вдъхновяваща обстановка както за местните фенове, така и за посетителите отдалеч.",
      delay: 0,
      isLeftAligned: false,
    },
    {
      imgSrc: "/illustrations/soccer_field.svg",
      imgAlt: "Soccer Field",
      title: "Организация на мачове",
      description:
        "Ние не само организираме физически мачове на стадиона, но и предлагаме виртуални турнири, позволяващи на феновете да участват от всяка точка на света. Нашата мисия е да обединим футболното изживяване във всякаква форма.",
      delay: 0.2,
      isLeftAligned: false,
    },
    {
      imgSrc: "/illustrations/shop.svg",
      imgAlt: "Fan Shop",
      title: "Нашият фен магазин",
      description:
        "В нашия фен магазин ще откриете богато разнообразие от брандирани спортни артикули – от официални фланелки и шапки до уникални аксесоари. Покупките не само подкрепят отбора, но и ви свързват още по-силно с общността на Аверите Девин FC.",
      delay: 0.4,
      isLeftAligned: false,
    },
  ];

  const leftColumnContent = sectionContent.slice(0, 3);
  const rightColumnContent = sectionContent.slice(3);

  return (
    <section
      ref={sectionRef}
      id="whoweare"
      className="relative bg-gray-50 py-20 px-4 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            За нас
          </motion.h2>
          <motion.p
            className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Добре дошли в света на Аверите Девин FC – нашата уникална концепция съчетава страстта към спорта с иновациите на видеоигрите. С нашия отбор и виртуална платформа, създаваме незабравимо фенско изживяване, предоставяйки нови възможности за взаимодействие и ангажиране на аудиторията.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-start space-y-8">
            {renderBlocks(leftColumnContent)}
          </div>

          <div className="flex flex-col justify-center items-start space-y-8">
            {renderBlocks(rightColumnContent)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
