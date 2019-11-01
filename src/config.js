export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_6WEDh2zYMWiGwnGIl4GY6rea00zefVx8vH",
  s3: {
    REGION: "us-ease-2",
    BUCKET: "notes-app-uploads-ws"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://u57e955l12.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PBJzyHs7t",
    APP_CLIENT_ID: "4q09bd8ta8c3a05240oe34vk82",
    IDENTITY_POOL_ID: "us-east-2:9a1782ca-8758-49eb-a5fa-402598935d4f"
  }
};