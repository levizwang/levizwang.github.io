import { Photo } from '@/types/optics';
import exifDataRaw from './optics-exif.json';

type PhotoExif = Pick<Photo, 'camera' | 'lens' | 'iso' | 'aperture' | 'shutter'> & {
  focalLength?: string;
};

const exifData = exifDataRaw as Record<string, PhotoExif>;

// Re-export imports
import yuanbaoInBed from '@/images/optics/Yuanbao_In_Bed.webp';
import fountain from '@/images/optics/Fountain.webp';
import olympicTower from '@/images/optics/Olympic_Tower.webp';
import olympicForestSunflower1 from '@/images/optics/Olympic_Forest_Sunflower_1.webp';
import olympicForestSunflower2 from '@/images/optics/Olympic_Forest_Sunflower_2.webp';
import olympicForestWhiteFlower1 from '@/images/optics/Olympic_Forest_White_Flower_1.webp';
import olympicForestAutumnLeaves from '@/images/optics/Olympic_Forest_Autumn_Leaves.webp';
import olympicForestAutumnLeaves2 from '@/images/optics/Olympic_Forest_Autumn_Leaves_2.webp';
import olympicForestPinkGrass1 from '@/images/optics/Olympic_Forest_Pink_Grass_1.webp';
import olympicForestGinkgo from '@/images/optics/Olympic_Forest_Ginkgo.webp';
import horohiraBridge from '@/images/optics/Horohira_Bridge.webp';
import chengjiangLake1 from '@/images/optics/Chengjiang_Lake_1.webp';
import chengjiangLakeside from '@/images/optics/Chengjiang_Lakeside.webp';
import chengjiangLakeside2 from '@/images/optics/Chengjiang_Lakeside_2.webp';
import baiwangMountain from '@/images/optics/Baiwang_Mountain.webp';
import baiwangMountainNight from '@/images/optics/Baiwang_Mountain_Night.webp';
import snowPlow from '@/images/optics/Snow_Plow.webp';
import snowAmusementPark from '@/images/optics/Snow_Amusement_Park.webp';
import catInSnow from '@/images/optics/Cat_In_Snow.webp';
import longmaMountainHydrangea1 from '@/images/optics/Longma_Mountain_Hydrangea_1.webp';
import longmaMountainMoss1 from '@/images/optics/Longma_Mountain_Moss_1.webp';
import longmaMountainWindmill from '@/images/optics/Longma_Mountain_Windmill.webp';

export const photos: Photo[] = [
  {
    id: '1',
    url: yuanbaoInBed,
    ...exifData['Yuanbao_In_Bed.webp'],
    category: 'Nature',
    location: 'Home',
    title: 'Yuanbao In Bed',
    story: 'A cozy moment captured at home.'
  },
  {
    id: '2',
    url: fountain,
    ...exifData['Fountain.webp'],
    category: 'Urban',
    location: 'City Park',
    title: 'Fountain',
    story: 'Water dancing in the city light.'
  },
  {
    id: '3',
    url: olympicTower,
    ...exifData['Olympic_Tower.webp'],
    category: 'Urban',
    location: 'Olympic Park',
    title: 'Olympic Tower',
    story: 'A towering structure against the sky.'
  },
  {
    id: '4',
    url: olympicForestSunflower1,
    ...exifData['Olympic_Forest_Sunflower_1.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Sunflower Bloom',
    story: 'Bright yellow petals facing the sun.'
  },
  {
    id: '5',
    url: olympicForestSunflower2,
    ...exifData['Olympic_Forest_Sunflower_2.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Sunflower Field',
    story: 'A field of golden sunflowers.'
  },
  {
    id: '6',
    url: olympicForestWhiteFlower1,
    ...exifData['Olympic_Forest_White_Flower_1.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'White Blossom',
    story: 'Delicate white flowers in bloom.'
  },
  {
    id: '7',
    url: olympicForestAutumnLeaves,
    ...exifData['Olympic_Forest_Autumn_Leaves.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Autumn Leaves',
    story: 'The colors of fall.'
  },
  {
    id: '8',
    url: olympicForestAutumnLeaves2,
    ...exifData['Olympic_Forest_Autumn_Leaves_2.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Golden Canopy',
    story: 'Sunlight filtering through autumn leaves.'
  },
  {
    id: '9',
    url: olympicForestPinkGrass1,
    ...exifData['Olympic_Forest_Pink_Grass_1.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Pink Muhly Grass',
    story: 'Soft pink waves in the breeze.'
  },
  {
    id: '10',
    url: olympicForestGinkgo,
    ...exifData['Olympic_Forest_Ginkgo.webp'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Ginkgo Avenue',
    story: 'Golden ginkgo leaves covering the path.'
  },
  {
    id: '11',
    url: horohiraBridge,
    ...exifData['Horohira_Bridge.webp'],
    category: 'Urban',
    location: 'Sapporo',
    title: 'Horohira Bridge',
    story: 'Architecture spanning the water.'
  },
  {
    id: '12',
    url: chengjiangLake1,
    ...exifData['Chengjiang_Lake_1.webp'],
    category: 'Nature',
    location: 'Chengjiang',
    title: 'Chengjiang Lake',
    story: 'Serene waters and distant mountains.'
  },
  {
    id: '13',
    url: chengjiangLakeside,
    ...exifData['Chengjiang_Lakeside.webp'],
    category: 'Nature',
    location: 'Chengjiang',
    title: 'Lakeside View',
    story: 'Peaceful moments by the lake.'
  },
  {
    id: '14',
    url: chengjiangLakeside2,
    ...exifData['Chengjiang_Lakeside_2.webp'],
    category: 'Nature',
    location: 'Chengjiang',
    title: 'Water\'s Edge',
    story: 'Where the water meets the land.'
  },
  {
    id: '15',
    url: baiwangMountain,
    ...exifData['Baiwang_Mountain.webp'],
    category: 'Nature',
    location: 'Baiwang Mountain',
    title: 'Baiwang Mountain',
    story: 'A view from the top.'
  },
  {
    id: '16',
    url: baiwangMountainNight,
    ...exifData['Baiwang_Mountain_Night.webp'],
    category: 'Urban',
    location: 'Baiwang Mountain',
    title: 'Baiwang Night',
    story: 'City lights seen from the mountain.'
  },
  {
    id: '17',
    url: snowPlow,
    ...exifData['Snow_Plow.webp'],
    category: 'Street',
    location: 'City Streets',
    title: 'Snow Plow',
    story: 'Clearing the way in winter.'
  },
  {
    id: '18',
    url: snowAmusementPark,
    ...exifData['Snow_Amusement_Park.webp'],
    category: 'Urban',
    location: 'Amusement Park',
    title: 'Snowy Park',
    story: 'A winter wonderland in the amusement park.'
  },
  {
    id: '19',
    url: catInSnow,
    ...exifData['Cat_In_Snow.webp'],
    category: 'Nature',
    location: 'Outdoors',
    title: 'Cat in Snow',
    story: 'A cat exploring the snowy landscape.'
  },
  {
    id: '20',
    url: longmaMountainHydrangea1,
    ...exifData['Longma_Mountain_Hydrangea_1.webp'],
    category: 'Nature',
    location: 'Longma Mountain',
    title: 'Hydrangea',
    story: 'Vibrant hydrangeas in bloom.'
  },
  {
    id: '21',
    url: longmaMountainMoss1,
    ...exifData['Longma_Mountain_Moss_1.webp'],
    category: 'Nature',
    location: 'Longma Mountain',
    title: 'Mountain Moss',
    story: 'Detailed texture of moss.'
  },
  {
    id: '22',
    url: longmaMountainWindmill,
    ...exifData['Longma_Mountain_Windmill.webp'],
    category: 'Nature',
    location: 'Longma Mountain',
    title: 'Windmill',
    story: 'Windmill turning in the mountain breeze.'
  },
];
