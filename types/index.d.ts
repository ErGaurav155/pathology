/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string | null;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string | null;
  photo: string;
};

// ====== IMAGE PARAMS
declare type AddImageParams = {
  image: {
    title: string;
    publicId: string;
    transformationType: string;
    width: number;
    height: number;
    config: any;
    secureURL: string;
    transformationURL: string;
    aspectRatio: string | undefined;
    prompt: string | undefined;
    color: string | undefined;
  };
  userId: string;
  path: string;
};

declare type UpdateImageParams = {
  image: {
    _id: string;
    title: string;
    publicId: string;
    transformationType: string;
    width: number;
    height: number;
    config: any;
    secureURL: string;
    transformationURL: string;
    aspectRatio: string | undefined;
    prompt: string | undefined;
    color: string | undefined;
  };
  userId: string;
  path: string;
};

declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

declare type CreateTransactionParams = {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

// declare type TransformationTypeKey =
//   | "restore"
//   | "fill"
//   | "remove"
//   | "recolor"
//   | "removeBackground";

declare type LongVidTypeKey =
  | "idea"
  | "title"
  | "description"
  | "tags"
  | "script"
  | "thumbnail"
  | "aiimages"
  | "translate"
  | "disclamer"
  | "email"
  | "all"
  | "TexttoAudio"
  | "prompt"
  | "backgroundMusicGen"
  | "audiotoAudio";

declare type ShortVidTypeKey =
  | "idea"
  | "title"
  | "description"
  | "tags"
  | "script"
  | "thumbnail"
  | "aiimages"
  | "translate"
  | "slogan"
  | "facts"
  | "quote"
  | "riddle"
  | "all"
  | "TexttoAudio"
  | "backgroundMusicGen"
  | "prompt"
  | "audiotoAudio";

declare type ContentWriterTypeKey =
  | "idea"
  | "outline"
  | "article"
  | "blog"
  | "book"
  | "title"
  | "images"
  | "summary"
  | "expander"
  | "translation"
  | "coverimage"
  | "email"
  | "tag"
  | "all"
  | "prompt"
  | "TexttoAudio";

declare type SocialMediaTypeKey =
  | "idea"
  | "images"
  | "bio"
  | "caption"
  | "tag"
  | "description"
  | "comment"
  | "tweet"
  | "avatar"
  | "all"
  | "prompt"
  | "backgroundMusicGen";

declare type MarketingTypeKey =
  | "all"
  | "calculator"
  | "finder"
  | "email"
  | "promotion";

declare type voiceType =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer";

declare type imageType =
  | "256x256"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1024x1792"
  | null
  | undefined;

declare type imagenumber = number | null | undefined;
// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type LongSearchParamProps = {
  params: { id: string; type: LongVidTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type ShortSearchParamProps = {
  params: { id: string; type: ShortVidTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type SocialMediaSearchParamProps = {
  params: { id: string; type: SocialMediaTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type MarketingSearchParamProps = {
  params: { id: string; type: MarketingTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type ContentWriterSearchParamProps = {
  params: { id: string; type: ContentWriterTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};

declare type TransformationFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};
declare type LongAiFormProps = {
  userId: string;
  type: LongVidTypeKey;
  creditBalance: number;
};
declare type ShortAiFormProps = {
  userId: string;
  type: ShortVidTypeKey;
  creditBalance: number;
};
declare type ContentWriterAiFormProps = {
  userId: string;
  type: ContentWriterTypeKey;
  creditBalance: number;
};
declare type SocialMediaFormProps = {
  userId: string;
  type: SocialMediaTypeKey;
  creditBalance: number;
};
declare type MarketingFormProps = {
  userId: string;
  type: MarketingTypeKey;
  creditBalance: number;
};

declare type TransformedImageProps = {
  image: any;
  type: string;
  title: string;
  transformationConfig: Transformations | null;
  isTransforming: boolean;
  hasDownload?: boolean;
  setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};
