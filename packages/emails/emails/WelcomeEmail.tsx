import React from "react";
import { Html, Head, Body, Container, Heading, Text, Button } from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  loginUrl?: string;
}

export function WelcomeEmail({ name, loginUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Heading style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
            Welcome to Demo App, {name}!
          </Heading>

          <Text style={{ fontSize: "16px", lineHeight: "24px", marginBottom: "20px" }}>
            Thank you for joining our platform. We're excited to have you on board!
          </Text>

          <Text style={{ fontSize: "16px", lineHeight: "24px", marginBottom: "30px" }}>
            Get started by exploring our features and setting up your profile.
          </Text>

          {loginUrl && (
            <Button
              href={loginUrl}
              style={{
                backgroundColor: "#007ee6",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              Get Started
            </Button>
          )}

          <Text style={{ fontSize: "14px", color: "#666", marginTop: "30px" }}>
            If you have any questions, feel free to reach out to our support team.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
