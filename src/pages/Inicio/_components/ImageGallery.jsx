import heroCodingGirl from '../../../assets/img/hero_coding_girl.jpg';
import heroGroupLaptop from '../../../assets/img/hero_group_laptop.jpg';
import heroGirlsClass from '../../../assets/img/hero_girls_class.jpg';


/**
 * @param {object} props
 * @param {string[]} [props.images]
 * @returns {JSX.Element}
 */

const ImageGallery = ({ images }) => {
  const defaultImageSources = [
    heroCodingGirl,
    heroGroupLaptop,
    heroGirlsClass,
  ];

  const imageSources = images || defaultImageSources;

  return (
    
    <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[400px] md:h-[500px] lg:h-[600px] mx-auto">

      <img
        src={imageSources[0]}
        alt="Mulher ruiva focada programando em dois monitores no escritório"
        className="absolute w-[400px] z-40"
      />

      <img
        src={imageSources[1]}
        alt="Três jovens mulheres sorrindo enquanto olham para um laptop"
        className="absolute top-1/3 left-70 w-[450px] z-20"
      />

      <img
        src={imageSources[2]}
        alt="Grupo de jovens mulheres aprendendo e colaborando em notebooks em um ambiente de sala de aula"
        className="absolute top-100 left-[-20%] w-[600px] z-40"
      />
    </div>
  );
};

export default ImageGallery;