export type TypeRecording = {
  name: string;
  email: string;
  tel: string;
  message: string;
  personalData: boolean;
  oferta: boolean;
  mailing: boolean;
};

export type TypeRecordingResponse = {
  success: boolean;
  message: string;
};
