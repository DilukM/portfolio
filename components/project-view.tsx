"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ExpandIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Technology {
  name: string;
  icon?: string;
}

interface ProjectLink {
  type: "github" | "live" | "download" | "other";
  url: string;
  label: string;
}

interface ProjectViewProps {
  slug: string;
  title: string;
  description: string;
  videoSrc: string;
  videoThumbnail: string;
  images: ProjectImage[];
  technologies: Technology[];
  links: ProjectLink[];
  date: string;
  duration?: string;
  client?: string;
  role?: string;
}

export function ProjectView({
  slug,
  title,
  description,
  videoSrc,
  videoThumbnail,
  images,
  technologies,
  links,
  date,
  duration,
  client,
  role,
}: ProjectViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const isYouTubeVideo =
    videoSrc.includes("youtu.be") || videoSrc.includes("youtube.com");
  const youtubeVideoId = isYouTubeVideo ? getYouTubeVideoId(videoSrc) : null;

  useEffect(() => {
    // Simulate loading project data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (direction === "next") {
      setLightboxIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setLightboxIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-pink-500 border-l-transparent animate-spin mb-4"></div>
          <p className="text-muted-foreground">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Floating back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-16 left-3 z-40"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </motion.div>

      {/* Video section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>

        {isYouTubeVideo ? (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=1&rel=0`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={togglePlay}
                className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
              >
                {!isPlaying && (
                  <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                )}
              </motion.div>
            </div>

            <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <PauseCircle className="h-5 w-5" />
                ) : (
                  <PlayCircle className="h-5 w-5" />
                )}
              </Button>
            </div>

            <video
              ref={videoRef}
              src={videoSrc}
              poster={videoThumbnail}
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
              onEnded={() => setIsPlaying(false)}
            />
          </>
        )}
      </div>

      {/* Project info - Adjusted positioning */}
      <div className="relative mt-8 z-20 px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                {title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 text-purple-400" />
                  <span className="text-sm">{date}</span>
                </div>
                {duration && (
                  <div className="flex items-center">
                    <span className="hidden sm:inline mx-2 text-muted-foreground">
                      •
                    </span>
                    <span className="text-sm">{duration}</span>
                  </div>
                )}
                {client && (
                  <div className="flex items-center">
                    <span className="hidden sm:inline mx-2 text-muted-foreground">
                      •
                    </span>
                    <span className="text-sm">Client: {client}</span>
                  </div>
                )}
                {role && (
                  <div className="flex items-center">
                    <span className="hidden sm:inline mx-2 text-muted-foreground">
                      •
                    </span>
                    <span className="text-sm">Role: {role}</span>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{description}</p>

              <div className="flex flex-wrap gap-3">
                {links.map((link, index) => (
                  <Button
                    key={index}
                    variant={link.type === "github" ? "outline" : "default"}
                    className={
                      link.type === "github"
                        ? "rounded-full border-purple-500/30"
                        : "rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    }
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type === "github" && (
                        <Github className="h-4 w-4 mr-2" />
                      )}
                      {link.type === "live" && (
                        <ExternalLink className="h-4 w-4 mr-2" />
                      )}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Gallery section */}
      <div className="px-3 sm:px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            Gallery
          </h2>

          {/* Featured image slider */}
          <div className="relative mb-6">
            <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)] h-64 sm:h-80 md:h-96">
              <div className="relative w-full h-full">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-sm text-white bg-black/50 inline-block px-3 py-1 rounded-full">
                    {images[currentImageIndex].caption ||
                      `Image ${currentImageIndex + 1} of ${images.length}`}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={() => openLightbox(currentImageIndex)}
              >
                <ExpandIcon className="h-4 w-4" />
                <span className="sr-only">Expand</span>
              </Button>
            </Card>
          </div>

          {/* Thumbnail gallery */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                  currentImageIndex === index
                    ? "border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setCurrentImageIndex(index);
                }}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Technology details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-3 sm:px-4 py-6"
      >
        <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-slate-800/50 border border-purple-500/20"
                >
                  {tech.icon && (
                    <div className="w-6 h-6 mr-2">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                      />
                    </div>
                  )}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[90vw] h-[80vh]">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/70 text-white"
            onClick={closeLightbox}
          >
            <XIcon className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
            onClick={() => navigateLightbox("prev")}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
            onClick={() => navigateLightbox("next")}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm text-white bg-black/50 inline-block px-4 py-2 rounded-full">
              {images[lightboxIndex].caption ||
                `${lightboxIndex + 1} of ${images.length}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
