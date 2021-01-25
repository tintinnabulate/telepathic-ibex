import React from 'react';
import { Text, Stack } from '@chakra-ui/core';

export function Textual() {
  return (
    <Stack>
        <Text>All meeting times are in your timezone.</Text>
        <Text>To update information here, send an email to <a href="mailto:thevengo@gmail.com">thevengo@gmail.com</a></Text>
        <Text>Click here to view a list of <a href="https://docs.google.com/spreadsheets/d/1mJsAtK9GYq2TJwFSKbkq9OD436s00E_pTx1Oj96HbjI/edit#gid=0">YPAA speaker tapes/recordings & Online resources</a>.</Text>
        <Text>Click here to view a gallery of <a href="https://photos.google.com/share/AF1QipP6wBEm-jbNvmQ6q5XlG4yLPLlgarfcOKV11_ucuvUuWzzgfyXfNuYXRGHKb0BVog?key=VC1mLTRwX0lBX3NPVG5hSnBDcmgtT2h4WFd6WGFB">flyers for upcoming YPAA Events and Conventions</a>.</Text>
    </Stack>
  );
}
