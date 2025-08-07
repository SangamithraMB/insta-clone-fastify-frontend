import React, { useState } from "react";
import { Form, useNavigation } from "react-router";
import { createPostInputSchema } from "~/schemas/post.schema";
import { z } from "zod";

type FormErrors = z.ZodIssue[];

export function CreatePostForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const validationResult = createPostInputSchema.safeParse({
      caption,
      image: imageFile || undefined,
    });

    if (!validationResult.success) {
      setErrors(validationResult.error.issues);
      return;
    }

    const formData = new FormData();
    if (caption) formData.append("caption", caption);
    if (imageFile) formData.append("image", imageFile);

    (event.target as HTMLFormElement).submit();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        📸 Create a New Post
      </h2>
      <Form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-4 max-h-64 w-full object-contain rounded-lg border border-gray-200 dark:border-gray-700"
            />
          )}
          {errors.find((e) => e.path[0] === "image") && (
            <p className="mt-2 text-sm text-red-600">
              {errors.find((e) => e.path[0] === "image")?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Caption
          </label>
          <textarea
            id="caption"
            name="caption"
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a caption... 🌅"
          ></textarea>
          {errors.find((e) => e.path[0] === "caption") && (
            <p className="mt-2 text-sm text-red-600">
              {errors.find((e) => e.path[0] === "caption")?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 rounded-lg shadow text-white font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </Form>
    </div>
  );
}