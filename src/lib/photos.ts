import type { ImageMetadata } from "astro";

const allPhotos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/fotos/**/*.{avif,gif,jpeg,jpg,png,webp}",
  { eager: true },
);

export interface GalleryPhoto {
  image: ImageMetadata;
  src: string;
  fileName: string;
}

function fileNameOf(path: string): string {
  const normalized = path.replaceAll("\\", "/");
  return normalized.split("/").pop() ?? normalized;
}

function folderOf(path: string): string | undefined {
  const normalized = path.replaceAll("\\", "/");
  const match = normalized.match(/\/fotos\/([^/]+)\//);
  return match?.[1];
}

export function listPhotos(folder: string): GalleryPhoto[] {
  return Object.entries(allPhotos)
    .filter(([path]) => folderOf(path) === folder)
    .sort(([pathA], [pathB]) => {
      const nameA = fileNameOf(pathA);
      const nameB = fileNameOf(pathB);
      const coverA = /^cover\./i.test(nameA);
      const coverB = /^cover\./i.test(nameB);
      if (coverA !== coverB) return coverA ? -1 : 1;
      return nameA.localeCompare(nameB, "es", { numeric: true, sensitivity: "base" });
    })
    .map(([path, file]) => ({
      image: file.default,
      src: file.default.src,
      fileName: fileNameOf(path),
    }));
}
