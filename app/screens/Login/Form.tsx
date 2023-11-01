import React from "react"
import { View, TextInput } from "react-native"
import { FormikErrors, FormikProps, withFormik } from "formik"

import Button from "components/ui/Button"
import { LoginFormValues } from "types"
import { layoutStyles } from "styles"

interface FormProps {
  initialValues: LoginFormValues
  isLoading: boolean
  onSubmit: (values: LoginFormValues) => void
}

type Props = FormikProps<LoginFormValues> & FormProps

const LoginForm = ({ isLoading, setFieldValue, handleSubmit }: Props) => {
  return (
    <View style={layoutStyles.root}>
      <View style={layoutStyles.content}>
        <View>
          <TextInput
            style={layoutStyles.input}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            autoFocus={true}
            allowFontScaling={false}
            textContentType="emailAddress"
            onChangeText={(newValue: string) => {
              setFieldValue("email", newValue)
            }}
          />
        </View>
        <View>
          <TextInput
            style={layoutStyles.input}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            autoFocus={false}
            allowFontScaling={false}
            secureTextEntry
            textContentType="password"
            onChangeText={(newValue: string) => {
              setFieldValue("password", newValue)
            }}
          />
        </View>
        <View>
          <Button disabled={isLoading} onPress={handleSubmit}>
            Login or Register
          </Button>
        </View>
      </View>
    </View>
  )
}

const LoginFormWithFormik = withFormik<FormProps, LoginFormValues>({
  enableReinitialize: true,
  mapPropsToValues: ({ initialValues }) => initialValues,
  handleSubmit: (values, { props: { onSubmit } }) => onSubmit(values),
  validate: (values: LoginFormValues) => {
    const errors: FormikErrors<LoginFormValues> = {}
    return errors
  },
})(LoginForm)

export default LoginFormWithFormik
