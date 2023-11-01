import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native"
import { AuthOperationName, useEmailPasswordAuth } from "@realm/react"

import Form from "screens/Login/Form"
import { layoutStyles } from "styles"
import { LoginFormValues } from "types"

const LoginScreen = () => {
  const { logIn, register, result } = useEmailPasswordAuth()

  const [values, setValues] = useState({ email: "", password: "" })

  useEffect(() => {
    if (result.error) {
      if (result.operation === AuthOperationName.LogIn) {
        register(values)
      }
    }

    // NOTE: login after registration
    if (result.success && result.operation === AuthOperationName.Register) {
      logIn(values)
    }
  }, [result, values])

  const handleSubmit = (values: LoginFormValues) => {
    setValues(values)
    logIn(values)
  }

  return (
    <SafeAreaView style={layoutStyles.root}>
      <Form
        initialValues={{ ...values }}
        isLoading={result.pending}
        onSubmit={handleSubmit}
      />
    </SafeAreaView>
  )
}

export default LoginScreen
