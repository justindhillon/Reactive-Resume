import { zodResolver } from "@hookform/resolvers/zod";
import { defaultProfile, profileSchema } from "@reactive-resume/schema";
import {
  Avatar,
  AvatarImage,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = profileSchema;

type FormValues = z.infer<typeof formSchema>;

export const ProfilesDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultProfile,
    resolver: zodResolver(formSchema),
  });

  return (
    <SectionDialog<FormValues> id="profiles" form={form} defaultValues={defaultProfile}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="network"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Network</FormLabel>
              <FormControl>
                <Input {...field} placeholder="LinkedIn" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="johndoe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-1 sm:col-span-2">
              <FormLabel>URL</FormLabel>
              <FormControl>
                <URLInput {...field} placeholder="https://linkedin.com/in/johndoe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="icon"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel htmlFor="iconSlug">Icon</FormLabel>
              <FormControl>
                <div className="flex items-center gap-x-2">
                  <Avatar className="h-8 w-8 bg-white">
                    {field.value && (
                      <AvatarImage
                        className="p-1.5"
                        src={`https://cdn.simpleicons.org/${field.value}`}
                      />
                    )}
                  </Avatar>
                  <Input {...field} id="iconSlug" placeholder="linkedin" />
                </div>
              </FormControl>
              <FormMessage />
              <FormDescription className="ml-10">
                Powered by{" "}
                <a
                  href="https://simpleicons.org/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium"
                >
                  Simple Icons
                </a>
              </FormDescription>
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};