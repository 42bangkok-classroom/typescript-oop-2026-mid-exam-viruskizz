import axios from 'axios'
export interface FullAlbum {
  id: number;
  userId: number;
  title: string;
  photos: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[]
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

export async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
  if (!userIds || userIds.length === 0) {
    return new Promise(resolve => resolve([]))
  }
  try {
    const photos = await axios.get(PHOTOS_URL).then(r => r.data);
    const albums = await axios.get(ALBUMS_URL).then(r => r.data);
    const full = albums.map((a: any) => {
      return {
        ...a,
        photos: photos.filter((p: any) => p.albumId === a.id)
      }
    })
    return full.filter((f: any) => userIds.includes(f.userId))
  } catch (e) {
    return new Promise(resolve => resolve([]))
  }
}

// mapPhotoToAlbum([1]).then(res => console.log(res));