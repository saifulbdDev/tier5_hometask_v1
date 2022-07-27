import { IPost } from '../types/post';
import { IStory } from '../types/user';



export const storiesData: IStory[] = [
  {
    _id: '1',
    image: 'https://picsum.photos/500',
    user: {
      _id: '1',
      fullname: 'Saiful Islam',
      dp: 'https://picsum.photos/100',
    },
    createdAt: new Date(),
  },
  {
    _id: '2',
    image: 'https://picsum.photos/600',
    user: {
      _id: '1',
      fullname: 'Shihab',
      dp: 'https://picsum.photos/200',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    image: 'https://picsum.photos/700',
    user: {
      _id: '1',
      fullname: 'Ovy Bin',
      dp: 'https://picsum.photos/400',
    },
    createdAt: new Date(),
  },
  {
    _id: '5',
    image: 'https://picsum.photos/800',
    user: {
      _id: '1',
      fullname: 'Antor',
      dp: 'https://picsum.photos/300',
    },
    createdAt: new Date(),
  },
];
